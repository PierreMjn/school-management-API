const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/all", controller.allAccess);

    app.get(
        "/api/student",
        [authJwt.verifyToken],
        controller.studentBoard
    );

    app.get(
        "/api/mod",
        [authJwt.verifyToken, authJwt.isTeacher],
        controller.teacherBoard
    );

    app.get(
        "/api/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

    app.get(
        "/api/printer",
        [authJwt.verifyToken, authJwt.isPrinter],
        controller.printerBoard
    );
};