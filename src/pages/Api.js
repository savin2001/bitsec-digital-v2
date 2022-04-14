import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ApiCategories = [
    {
        id: "a1",
        apiImg: "https://i.imgur.com/6NKPrhO.png",
        title: "Settings API",
        class: "our-apis settings",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a2",
        apiImg: "https://i.imgur.com/KMbnpFF.png",
        title: "Speedup API",
        class: "our-apis speedup",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a3",
        apiImg: "https://i.imgur.com/AgyneKA.png",
        title: "Privacy API",
        class: "our-apis privacy",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a4",
        apiImg: "https://i.imgur.com/6NKPrhO.png",
        title: "Other API",
        class: "our-apis settings",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a5",
        apiImg: "https://i.imgur.com/vdH9LKi.png",
        title: "Backups API",
        class: "our-apis backups",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a6",
        apiImg: "https://i.imgur.com/v6OnUqu.png",
        title: "Security API",
        class: "our-apis ssl",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a7",
        apiImg: "https://i.imgur.com/VzjZw9M.png",
        title: "Database API",
        class: "our-apis database",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: "a8",
        apiImg: "https://i.imgur.com/6NKPrhO.png",
        title: "Other API",
        class: "our-apis settings",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
];

const Api = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        APIs <strong> page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                animateOnce
            >
                <div className="container-bg1" id="api-contain">
                    <div className="container">
                        <div className="api-list">
                            <div className="text-center mt-5">
                                <h2>Our APIs</h2>
                            </div>
                            <div className="row">
                                {ApiCategories.map((item) => (
                                    <div className="col" key={item.id}>
                                        <Link to={"/api/" +
                                                    item.id +
                                                    "/" +
                                                    item.title +
                                                    "/" +
                                                    item.body}>
                                            <div className="box">
                                                <div className={item.class}>
                                                    <div className="icon">
                                                        {" "}
                                                        <img
                                                            src={item.apiImg}
                                                            alt=""
                                                        />{" "}
                                                    </div>
                                                    <h4>{item.title}</h4>
                                                    <p>
                                                        {item.body.slice(0, 0)}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Api;
