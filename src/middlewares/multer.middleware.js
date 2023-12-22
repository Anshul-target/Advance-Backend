import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})








// What is multer
// The definition you provided is accurate.Let's break it down:

// 1. ** Node.js Middleware:** Multer is designed to work with Node.js, a server - side JavaScript runtime.Middleware in Node.js refers to functions that have access to the request, response, and the next middleware function in the application's request-response cycle. Multer acts as middleware to handle file uploads in the context of multipart/form-data.

// 2. ** Handling Multipart / Form - Data:** The term "multipart/form-data" refers to a type of encoding that's used when submitting forms that contain binary data, such as files. When users upload files through a form on a website, the data is sent as a series of parts, each part representing a different piece of the form, including the files. Multer is specifically designed to parse and handle this type of data.

// 3. ** File Uploads:** Multer's main purpose is to facilitate the handling of file uploads. It can parse incoming requests containing file data and make that data available for further processing in your Node.js application.

// In summary, Multer is a middleware for Node.js applications that specializes in handling requests with multipart / form - data encoding, making it particularly useful for handling file uploads.It simplifies the process of extracting and managing uploaded files in your server - side application.



//  The cb(callback) function is used to communicate back to multer

// Here's what each parameter of the cb function does:

// null: This is the error parameter.In Node.js callback conventions, the first parameter of a callback is typically reserved for an error.Since the destination function is synchronous and doesn't encounter an error, null is passed to indicate that there is no error.

// './public/temp': This is the path to the destination directory where the uploaded files will be stored.In this case, the files will be stored in the "./public/temp" directory.Adjust this path based on your application's directory structure and where you want to store uploaded files.

// So, in summary, cb(null, './public/temp'); informs multer that there is no error(null), and it should store the uploaded files in the "./public/temp" directory.



// In the context of `multer` and the `diskStorage` configuration, the`cb` function (callback function) is used to communicate back to `multer` how and where to store the uploaded files.It has a specific signature and is called with certain parameters.

//     The `cb` function typically has the following signature:

// ```javascript
// cb(error, destination)
// ```

//     - `error`: The first parameter is reserved for an error.If an error occurs during the execution of the `destination` or `filename` functions, you can pass an error object here.If no error occurred, you pass`null`.

// - `destination`(or`filename`): The second parameter is the result of the operation, indicating where the file should be stored(in the case of`destination`) or what the file should be named(in the case of`filename`).

//     Here's how it works in the `destination` function:

//         ```javascript
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/temp');
//     },
//     filename: function (req, file, cb) {
//         // Custom logic to determine the file name
//         cb(null, file.originalname);
//     }
// });
// ```

// In the `destination` function, `cb(null, './public/temp')` tells `multer` that there is no error(`null`), and it should store the uploaded files in the "./public/temp" directory.

//     Similarly, in the`filename` function, `cb(null, file.originalname)` indicates that there is no error, and the file should be named using its original name.You can customize this logic to determine the filename based on your requirements.








// multer.diskStorage to define where to store the files and how to name them.

//     destination: Specifies the directory where uploaded files will be stored.In this example, it's set to "./public/temp".
// filename: Specifies how to name the uploaded files.Here, it uses the original filename.



