"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const authorize = (...allowedRoles) => (req, res, next) => {
    try {
        const userRole = req.user?.userType;
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden — you are not allowed",
            });
        }
        next();
    }
    catch (err) {
        return res.status(403).json({
            success: false,
            message: "Access denied",
        });
    }
};
exports.authorize = authorize;
//# sourceMappingURL=role.middleware.js.map