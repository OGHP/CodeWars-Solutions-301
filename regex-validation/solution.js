function validateUsr(username) {
    // res = /^[a-z0-9_]{4,16}$/.test(username)
    res = /^[a-z\d_]{4,16}$/.test(username)
    return res
}
