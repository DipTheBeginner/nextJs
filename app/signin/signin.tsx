import { SigninComponent } from "./signinComponent" 


export const Signin = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
                <SigninComponent />
            </div>
            <div className="invisible lg:visible">
                
            </div>

        </div>
    </div>
}