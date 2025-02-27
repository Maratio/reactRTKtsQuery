import { useEffect, useState } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

export default function PostContainer() {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postApi.useFetchAllPostsQuery(
    limit
    // {
    //     pollingInterval : 1000
    // }
  );

  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postApi.useCreatePostMutation();

  useEffect(() => {
    setTimeout(() => {
      setLimit(20);
    });
  }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

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
      <button onClick={handleCreate}>Add new post</button>
      <button onClick={() => refetch()}>REFECTH</button>
      <div className="post__list">
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Ошибка</h1>}
        {posts?.map((post) => (
          <PostItem
        post={post}
        remove={handleRemoveItem}
        update={handleUpdateItem}
        key={post.id}/>
))}
      </div>
    </div>
  );
}
