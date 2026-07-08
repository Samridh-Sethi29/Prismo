const healthCheck = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Prismo API is running successfully 🚀"
    });
};

module.exports = { healthCheck };