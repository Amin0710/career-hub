import React from "react";
import "./Footer.css";
import fb from "../../assets/Logo/fb.png";
import In from "../../assets/Logo/In.png";
import tw from "../../assets/Logo/tw.png";

const Footer = () => {
	return (
		<footer>
			<div id="footer-content">
				<div id="footer-content-top">
					<div>
						<p className="columHead logo">CareerHub</p>
						<p>
							There are many variations of passages of Lorem Ipsum , but the
							majority have suffered alteration in some form.
						</p>
						<img src={fb} alt="Image 1" />
						<img src={In} alt="Image 2" />
						<img src={tw} alt="Image 3" />
					</div>
					<div>
						<p className="columHead">Company</p>
						<p>About Us</p>
						<p>Work</p>
						<p>Latest News</p>
						<p>Careers</p>
					</div>
					<div>
						<p className="columHead">Product</p>
						<p>Prototype </p>
						<p>Plans & Pricing</p>
						<p>Integrations</p>
						<p>Customers</p>
					</div>
					<div>
						<p className="columHead">Support</p>
						<p>Help Desk</p>
						<p>Sales</p>
						<p>Become a Partner</p>
						<p>Developers</p>
					</div>
					<div>
						<p className="columHead">Contact</p>
						<p>524 Broadway. NYC</p>
						<p>+1777-978-5570</p>
					</div>
				</div>
				<hr className="hr"></hr>
				<div id="footer-content-bottom">
					<p>
						@2023 <span className="bold">CareerHub</span>. All Rights Reserved
					</p>
					<p>
						Powered by <span className="bold">CareerHub</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
