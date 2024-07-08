import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolveCourseIndex = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parseId = parseInt(id);

  if (isNaN(parseId)) return res.sendStatus(400);

  const findCourse = await prisma.Courses.findUnique({
    where: { id: parseId },
  });

  if (!findCourse) return res.sendStatus(404);

  req.findCourse = findCourse;
  req.parseId = parseId;

  next();
};

export default resolveCourseIndex;
