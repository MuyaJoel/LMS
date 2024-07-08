import { PrismaClient } from "@prisma/client";
import { matchedData } from "express-validator";

const prisma = new PrismaClient();

const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      const data = matchedData(req, { includeOptionals: true });
      console.log("Matched Data:", data); // Debug log

      const instructorEmail = data.email;
      const user = await prisma.Users.findUnique({
        where: {
          email: instructorEmail,
        },
      });

      if (!user) {
        console.log("User not found"); // Debug log
        return res.status(404).json({ message: "User not found" });
      }

      if (!roles.includes(user.role)) {
        console.log("User role not authorized"); // Debug log
        return res.sendStatus(403);
      }

      req.userRole = user.role;
      next();
    } catch (error) {
      console.error("Error in authorizeRoles middleware:", error); // Debug log
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};

export default authorizeRoles;
