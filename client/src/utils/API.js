import axios from "axios";
// import determineEnv from "../environment/determineEnv";
// import determineAPIHost from "../environment/determineAPIHost";
const APIHost = '/api'

export default {
  // Gets all reviews
  getAll: function(reviews) {
    console.log("getAll, in client side API hit!");
    return axios.get(`${APIHost}/reviews`, reviews);
  },

  // Gets the reviews with the given addressId
  searchByAddress: function(address) {
    console.log("getOne, in client side API hit!");
    return axios.post(`${APIHost}/reviews/search`, address);
  },

  // Deletes the reviews with the given addressId
  deleteReview: function(endpoint) {
    return axios.delete(`${APIHost}/${endpoint}`);
  },

  // Saves a reviews to the database
  saveReview: function(review) {
    console.log("Save Review, in client side API hit!");
    return axios.post(`${APIHost}/reviews`, review);
  },

  getUser: function() {
    return axios.get(`${APIHost}/user`);
  },

  login: function(user) {
    console.log("getting the login in api")
    console.log(user);
    return axios.post(`${APIHost}/user/login`, user);
  }
};
