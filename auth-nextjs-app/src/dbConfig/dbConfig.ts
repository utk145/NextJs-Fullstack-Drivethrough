import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on("Connected", () => {
            console.log("Mongo DB connected succesfully");
        })
        connection.on('error', (err) => {
            console.log("Make sure mongodb is running " + err);
            process.exit();
        });

    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
    }
}
