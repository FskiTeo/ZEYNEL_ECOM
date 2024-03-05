import ProfileCard from "./ProfileCard";

export default function ProfilePage(props) {

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            <ProfileCard userData={props.userData}/>
        </div>
    )
}