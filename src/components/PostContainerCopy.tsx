import React from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

export default function PostContainerCopy() {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(25);
  const [deletePost, {}] = postApi.useDeletePostMutation()
  const [updatePost, {}] = postApi.useUpdatePostMutation()

  const handleRemoveItem = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdateItem = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {posts?.map((post) =>
        <PostItem
        post={post}
        remove={handleRemoveItem}
        update={handleUpdateItem}
        key={post.id}/>
        )}
      </div>
    </div>
  );
}
