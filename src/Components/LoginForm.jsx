import { Button, Card, TextField, CardContent} from '@mui/material';

const styles = {
    // ... (autres styles)
  
    blackButton: {
      backgroundColor: 'black',
      color: 'white', // Couleur du texte
    },
};
  


export default function LoginForm(){
    return(<div>
        <Card>
            <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold">Login</h3>
                <h4>Entrez votre email et votre mot de passe pour<br></br> accéder à votre compte.</h4>
                <div className="space-y-2">
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        className='w-full'
                    />                
                </div>
                <div className="space-y-2">
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className='w-full'
                    />
                </div>
                <div className="space-y-2">
                    <Button variant="contained" className='w-full' style={{ ...styles.submit, ...styles.blackButton }}>Login</Button>
                </div>
            </CardContent>
        </Card>
        </div>
    )
    
}