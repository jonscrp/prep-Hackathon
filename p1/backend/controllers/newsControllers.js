    
    
exports.getNews = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all the news in the database"
    });
}