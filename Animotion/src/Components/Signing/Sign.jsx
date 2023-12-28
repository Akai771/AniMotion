import { supabase } from "../Signing/supabaseClient";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom";
import "./signing.css";

function Sign() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event === 'SIGNED_OUT') {
            navigate('/home');
        }
        else{
            navigate('/sign');
        }
    })

    return (
        <div className="signCard">
            <Auth 
            providers={['google']}
            supabaseClient={supabase} 
            appearance={{
                // theme: ThemeSupa,
                extend: false,
                className: {
                    container: 'containerClass',
                    divider: 'dividerClass',
                    anchor: 'anchorColor',
                    button: 'signButton',
                    label: 'labelClass',
                    input: 'inputClass',
                },
            }} 
            localization={{
                variables: {
                  sign_in: {
                    email_label: 'Email address',
                    password_label: 'Password',
                  },
                },
              }}
            // theme="dark"
            />
        </div>
    );
}

export default Sign;
