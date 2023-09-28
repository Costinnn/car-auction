import prismadb from "./prismadb";

// GET all DB POSTS

export async function getListings(req) {
  let posts;
  try {
    // TRIGGERED IF FILTER QUERY URL FOUND
    if (req.category) {
      let sortDate = new Date();

      if (req.sort === "new") {
        sortDate.setDate(sortDate.getDate() - 5);
      }
      if (req.sort === "ending") {
        sortDate.setDate(sortDate.getDate() + 2);
      }

      posts = await prismadb.carpost.findMany({
        where: {
          ...(req.category !== "all" ? { category: req.category } : {}),
          ...(req.brand !== "all" ? { brand: req.brand } : {}),
          ...(req.sort === "new" ? { createdAt: { gte: sortDate } } : {}),
          ...(req.sort === "ended" ? { expiresAt: { lt: new Date() } } : {}),
          ...(req.sort === "ending"
            ? {
                AND: [
                  { expiresAt: { lt: sortDate } },
                  { expiresAt: { gt: new Date() } },
                  { year: { gte: req.year1 } },
                  { year: { lte: req.year2 } },
                ],
              }
            : {}),
          ...(req.sort !== "ending"
            ? {
                AND: [
                  { year: { gte: req.year1 } },
                  { year: { lte: req.year2 } },
                ],
              }
            : {}),
        },
        // SELECT FIELDS TO FETCH
        select: {
          id: true,
          brand: true,
          category: true,
          year: true,
          extImages: true,
          title: true,
          location: true,
          expiresAt: true,
          engineCylinders: true,
          engineCapacity: true,
          gears: true,
          transmission: true,
          engineConfiguration: true,
          mileage: true,
          sellerId: true,
          minimumBid: true,
          bidValue: true,
        },
        // ORDER POSTS
        ...(req.sort === "new"
          ? {
              orderBy: { createdAt: "asc" },
            }
          : {}),
        ...(req.sort === "ending"
          ? {
              orderBy: { expiresAt: "asc" },
            }
          : {}),
        ...(req.sort === "trending"
          ? {
              orderBy: { views: "desc" },
            }
          : {}),
      });
    } else if (req.search) {
      // TRIGGERED IF SEARCH QUERY URL FOUND
      posts = await prismadb.carpost.findMany({
        where: {
          OR: [
            { brand: { contains: req.search } },
            { title: { contains: req.search } },
            { model: { contains: req.search } },
            { category: { contains: req.search } },
            { year: { contains: req.search } },
          ],
        },
        select: {
          id: true,
          brand: true,
          category: true,
          year: true,
          extImages: true,
          title: true,
          location: true,
          expiresAt: true,
          engineCylinders: true,
          engineCapacity: true,
          gears: true,
          transmission: true,
          engineConfiguration: true,
          mileage: true,
          sellerId: true,
          minimumBid: true,
          bidValue: true,
        },
      });
    } else {
      // TRIGGERED IF NO QUERY URL FOUND
      posts = await prismadb.carpost.findMany({
        select: {
          id: true,
          brand: true,
          category: true,
          year: true,
          extImages: true,
          title: true,
          location: true,
          expiresAt: true,
          engineCylinders: true,
          engineCapacity: true,
          gears: true,
          transmission: true,
          engineConfiguration: true,
          mileage: true,
          sellerId: true,
          minimumBid: true,
          bidValue: true,
        },
      });
    }

    // get only 5 photos & adds current bid value if exists
    if (posts) {
      posts.forEach((post) => post.extImages.splice(5));
      return posts;
    }

    return null;
  } catch (err) {
    console.log(err);
    return `There was an error while getting Listings! ${err}`;
  }
}
