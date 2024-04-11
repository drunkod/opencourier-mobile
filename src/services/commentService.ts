import { UClient } from './Client';
import { OrderServiceParams, OrderServiceReponse } from './types';
export interface CommentService {
  createComment: (params: OrderServiceParams) => Promise<OrderServiceReponse>;
  updateComment: (params: OrderServiceParams) => Promise<OrderServiceReponse>;
  deleteComment: (params: OrderServiceParams) => Promise<OrderServiceReponse>;
}

const commentService = (client: UClient): CommentService => {
  const createComment = async (
    params: OrderServiceParams,
  ): Promise<OrderServiceReponse> => {
    console.log('Create comment params', params);
    return client
      .post(`/comments/`, {
        text: params.data.text,
        MerchantId: params.data.MerchantId,
        LocationId: params.data.LocationId,
        CourierId: params.data.commentor,
      })
      .then(() => {
        console.log('Comment created successfully');
        return { data: null, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };
  const updateComment = async (
    params: OrderServiceParams,
  ): Promise<OrderServiceReponse> => {
    console.log('Update comment params', params);
    return client
      .patch(`/comments/${params.id}`, {
        text: params.data.text,
        likes: params.data.likes,
        CourierId: params.data.commentor ? params.data.commentor != null: params.data.liker,
      })
      .then(() => {
        console.log('Comment updated successfully');
        return { data: null, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };
  const deleteComment = async (
    params: OrderServiceParams,
  ): Promise<OrderServiceReponse> => {
    console.log('Delete comment params', params);
    return client
      .delete(`comments/${params.id}`)
      .then(() => {
        console.log('Comment deleted successfully');
        return { data: null, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };
  return {
    createComment,
    updateComment,
    deleteComment,
  };
};

export default commentService;
