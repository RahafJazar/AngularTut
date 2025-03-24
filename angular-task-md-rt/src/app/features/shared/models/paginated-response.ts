import User from "../../models/user.model"

interface PaginatedResponse<T> {
    page: number //what page i in 
    totalPages: number //number of pages
    totalItems: number //number of items 
    data: T[] //array of User is the data
}

export default PaginatedResponse