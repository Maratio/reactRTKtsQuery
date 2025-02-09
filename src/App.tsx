import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks.ts/redux";
import { userSlice } from "./store/reducers/userSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { count, error, isLoading, users } = useAppSelector(
    (state) => state.userReducer
  );
  // const {} = useSelector((state:RootState )=> state.)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // if(error){
  //   return (<h1>Oshibka</h1>)
  // }
return error ? (
    (<h1>Oshibka</h1>)
  ) : (
    <div className="App">
      {isLoading ? (
        <div style={{ fontSize: "2rem", marginTop: 20, color: "blue" }}>
          Zagruzautsa
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>zagruzilis</div>
      )}
      {users.length > 0 ? (
        <div>
          <div style={{ border: "1px solid black", padding: 10, marginTop: 5 }}>
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>Юзеры отсутствуют</div>
      )}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
    </div>
  );
}

export default App;
