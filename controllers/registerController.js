const User = require('../model/userSchema');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'email and password are required.' });

    
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); 

    try {
        
        const hashedPwd = await bcrypt.hash(password, 10);

        
        const result = await User.create({
            "email": email,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${email} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };