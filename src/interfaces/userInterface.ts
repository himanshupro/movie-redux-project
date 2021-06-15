export interface UserSignUp {
    userName: String,
    email : String,
    gender : String,
    password : String,
}

export interface UserLogin {
    userId: String,
    password: String
}

export interface MovieDetails {
    imdbID : String,
    title : String,
    imdbRating : Number,
    year : Number,
    poster : String
}