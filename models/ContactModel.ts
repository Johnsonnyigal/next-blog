import mongoose from "mongoose"



const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    project: {type: String, required: true},
    budget: {type: String, required: true},
    message: {type: String, required: true}
})


const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;