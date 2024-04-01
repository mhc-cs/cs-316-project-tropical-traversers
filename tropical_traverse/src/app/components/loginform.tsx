export default function forms(){
    return(
        <>
        <div>
            <label>
                Name: <input name="name" />
            </label>
            <label htmlFor="">
                username: <input name="username"/>
            </label>
            <label htmlFor="">
                email: <input name="email"/>
            </label>
            <label htmlFor="">
                password: <input type="password" name="password"/>
            </label>
        </div>
        
        </>
    );
}