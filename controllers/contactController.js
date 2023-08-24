const Contact = require('../models/Contact')

exports.createContact = async (req, res) => {
    try {
        const { email, name, phoneNumber, profilePic,createdBy } = req.body;
        const contact = new Contact({ email, name, phoneNumber, profilePic,createdBy });
        await contact.save();
        res.status(201).json({ message: 'Contact created successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error creating Contact', error });
      }
  };
exports.getallContacts =async (req, res) => {
  const {createdBy} = req.body;
    try {
        const contacts = await Contact.find({createdBy});
        res.json(contacts);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching contacts' });
      }
}  

exports.getContact = async (req,res)=>
{
    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);
      } catch (error) {
        res.status(404).json({ error: 'Contact not found' });
      }
}

exports.editContact = async (req,res)=>
{
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.json(updatedContact);
      } catch (error) {
        res.status(400).json({ error: 'Error updating contact' });
      }
}
exports.deleteContact = async(req,res)=>
{
    try {
        await Contact.findByIdAndRemove(req.params.id);
        res.json({ message: 'Contact deleted' });
      } catch (error) {
        res.status(400).json({ error: 'Error deleting contact' });
      }
}