import {ReactComponent as DownLogo} from '../pics/down.svg';
import phone from '../pics/phone.webp';


export default function MainBanner(){

    return(
        

        <div className="mainbanner">
            <div className="bannersection1">
                <div className="signupSection">
                    <div className="singupText">
                        <h1>تپسی</h1>
                        <p>اپلیکیشن درخواست خودرو</p>
                    </div>
                    <ul className="signupButtons">
                        <li className="signupButton1">
                            <DownLogo/>
                            <p>دانلود اپلیکیشن مسافران</p>
                        </li>
                        <li className="signupButton2">
                            <DownLogo/>
                            <p>وب اپلیکیشن مسافران</p>
                        </li>
                        <li className="signupButton3">
                            <DownLogo/>
                            <p>دانلود اپلیکیشن رانندگان</p>
                        </li>
                        <li className="signupButton4">
                            <DownLogo/>
                            <p>ثبت نام راننده</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bannersection2">
                <img src={phone} alt="" />
            </div>
        </div>

    )
}