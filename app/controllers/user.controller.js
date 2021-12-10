exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.professorBoard = (req, res) => {
    res.status(200).send("Professor Content.");
};

exports.printerBoard = (req, res) => {
    res.status(200).send("Printer Content.");
};