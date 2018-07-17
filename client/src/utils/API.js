import axios from "axios";
// import determineEnv from "../environment/determineEnv";
// import determineAPIHost from "../environment/determineAPIHost";
const APIHost = '/api'

export default {
  // Gets all reviews
  getAll: function(endpoint) {
    return axios.get(`${APIHost}/${endpoint}`);
  },
  // Gets the reviews with the given addressId
  getOne: function(review) {
    return axios.get(`${APIHost}/reviews`, review);
  },
  // Deletes the reviews with the given addressId
  deleteReview: function(endpoint) {
    return axios.delete(`${APIHost}/${endpoint}`);
  },
  // Saves a reviews to the database
  saveReview: function(review) {
    console.log("Save Review, in client side API hit!");
    return axios.post(`${APIHost}/reviews`, review);
    
  }
};
