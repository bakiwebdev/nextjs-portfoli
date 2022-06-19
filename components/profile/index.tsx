import Image from "next/image";

const Profile = () => {
    return (
        <div className="w-full h-fit p-5 flex justify-between bg-gray-300">
            {/* about me and link */}
            <div>
                about me
            </div>
            {/* profile picture */}
            <Image src="/images/profile.jpg" alt="profile" width={200} height={200} className="rounded-full object-cover " />
        </div>
    );
}

export default Profile;