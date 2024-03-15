import formidable from 'formidable';
import Image from '@/app/(models)/ImageModel';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    await mongoose.connect(process.env.MONGODB_URI).then(r => {console.log('Connected to MongoDB');
    }).catch((e) => {
        console.log(e);
    });

    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads';
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: 'Something went wrong' });
            return;
        }

        const image = new Image({
            filename: files.image.name,
            contentType: files.image.type,
            image: files.image.path,
        });

        try {
            await image.save();
            res.status(201).json({ success: true, message: 'Image uploaded successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to upload image' });
        }
    });
}
