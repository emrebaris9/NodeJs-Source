const isLogin = (req, res, next) => {
    const isLogin = true;

    if (isLogin)                                
        next();                         // ara katman yönlendirmeyi yapar
    else
        res.send("Lütfen giriş yapın.");
};

module.exports = isLogin;