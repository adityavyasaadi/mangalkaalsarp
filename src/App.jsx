import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { doosh, poojan, siteQuickInfo } from "./constants";
import Testimonials from "./components/Testimonials";
import Keyfeatures from "./components/Keyfeatures";

const App = () => {
	return (
		<>
			<Navbar />
			<div id="banner" />

			<section id="about">
				<div className="container flex">
					<div className="c-space content">
						<h2>About</h2>

						<h3>Aacharya Brajesh vyasji</h3>

						<p className="introPara">
							आचार्य बृजेश व्यास जी की रुचि बाल्य काल से ही पूजा पद्धति एवं कर्मकांड में है उन्हें पूजन और
							अनुष्ठान कार्य का कई वर्षों का अनुभव है एवं सभी प्रकार के अनुष्ठानों को संपूर्ण विधि विधान
							से संपन्न कराते हैं जैसे मंगल दोष ,महामृत्युंजय जाप ,रुद्राभिषेक, नवग्रह शांति,
							गुरु चांडाल दोष ,मंगल अंगारक युति एवं आप अपनी मनोकामना सिद्धि हेतु कार्य संपन्न करवा सकते
							हैं
						</p>

						<a href="#" className="btn">
							About 
						</a>
					</div>

					<div className="profile">
						<img src="../assets/images/profile-img.jpeg" alt="Profile" className="bg" />
					</div>
				</div>
			</section>

			<section id="doosh">
				<div className="container">
					<div className="flex title">
						<h2>Dosh Nivaran poojas</h2>
						<a href={`tel:${siteQuickInfo.phone}`} className="btn">
							Call me
						</a>
					</div>

					<div className="sub-section">
						<h3>Mangaldosh Nivaran Bhat Pooja</h3>

						<div className="flex img-collage">
							<div>
								<img src="../assets/images/bg-img1.jpeg" alt="Image" />
							</div>
							<div>
								<img src="../assets/images/bg-img2.jpeg" alt="Image" />
							</div>
						</div>

						<p>
							- mangaldosh, also known manglikdosh are people in vedic astrology ,who have a condition
							called mangaldosh,or manglik dosh.this condition arrises when the planet mars (mangal)is
							positioned in certain houses in a persons birth chart(horoscope),typically in the
							1,4,7,8,and 12 house.
						</p>
						<p>
							- मंगल ग्रहों की भांति कुण्डली के बारह भावों में से किसी एक भाव में स्थित होता है। बारह
							भावों में से कुछ भाव ऐसे हैं जहां मंगल की स्थिति को मंगलीक दोष के रूप में लिया जाता
							है।कुण्डली में जब लग्न भाव, चतुर्थ भाव, सप्तम भाव, अष्टम भाव और द्वादश भाव में मंगल स्थित
							होता है तब कुण्डली में मंगल दोष माना जाता है। सप्तम भाव से हम दाम्पत्य जीवन का विचार करते
							हैं। अष्टम भाव से दाम्पत्य जीवन के मांगलीक सुख को देखा जाता है। मंगल लग्न में स्थित होने से
							सप्तम भाव और अष्टम भाव दोनों भावों को दृष्टि देता है। चतुर्थ भाव में मंगल के स्थित होने से
							सप्तम भाव पर मंगल की चतुर्थ पूर्ण दृष्टि पड़ती है। द्वादश भाव में यदि मंगल स्थित है तब अष्टम
							दृष्टि से सप्तम भाव को देखता है।
						</p>
					</div>

					{doosh.map(({ title, img, description }, idx) => (
						<div className="sub-section flex" key={idx}>
							<div className="imgs flex">
								{img.map((img, idx) => (
									<div key={idx}>
										<img src={img} alt="Image" />
									</div>
								))}
							</div>

							<div className="content">
								<h3>{title}</h3>
								{description.map((desc, idx) => (
									<p key={idx}>{desc}</p>
								))}
							</div>
						</div>
					))}

					<div id="carousels" className="flex">
						<Carousel
							images={[
								"/assets/images/bg-img1.jpeg",
								"/assets/images/bg-img2.jpeg",
								"/assets/images/slider-img1.jpeg",
							]}
						/>

						<Carousel
							images={[
								"/assets/images/bg-img1.jpeg",
								"/assets/images/slider-img2.jpeg",
								"/assets/images/slider-img1.jpeg",
							]}
						/>
					</div>

					<div id="video_collage" className="flex">
						<div>
							<video width="565" height="400" controls>
								<source src="../assets/images/video1.mp4" type="video/mp4" />
							</video>
						</div>

						<div>
							<video width="565" height="400" controls>
								<source src="../assets/images/video1.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
			</section>

			<section id="why_choose_us">
				<div className="container">
					<h2>Why Choose Us</h2>
					<p>
						Discover the reasons why Mangaldoshpoojan is the top choice for astrology and karmkand
						enthusiasts seeking reliable and insightful services.
					</p>

					<Keyfeatures />
				</div>
			</section>

			<section id="poojan">
				<div className="container">
					<h2 className="section-title">Poojan</h2>

					<div className="grid">
						{poojan.map(({ title, img, description }, idx) => (
							<div key={idx} className="poojan-item">
								<div className="poojan-img">
									<img src={img} alt={title} />
								</div>
								<h3>{title}</h3>

								<p className="poojan-info">{description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="testimonials">
				<div className="container">
					<h2>Client Testimonials</h2>
					<p>
						Our clients share their experiences with Mangaldoshpoojan and how our poojas services have
						positively impacted their lives.
					</p>

					<Testimonials />
				</div>
			</section>

			<footer>
				<div className="container">
					<div className="flex contact">
						<div>
							<span>{siteQuickInfo.name}</span>
							<span>{siteQuickInfo.domain}</span>
						</div>

						<div>Ujjain, Madhya Pradesh, India</div>
					</div>

					<div className="flex">
						<a href="https://www.facebook.com/profile.php?id=100092366739226&mibextid=ZbWKwL">
							<img src="/assets/images/facebook.png" alt="Facebook logo" />
						</a>
						<a href="https://youtube.com/@panditforpuja251?si=IjtARdQlFpZUv6LV">
							<img src="/assets/images/youtube.png" alt="Youtube logo" />
						</a>
						<a href={`https://api.whatsapp.com/send?phone=${siteQuickInfo.whatsapp}`}>
							<img src="/assets/images/whatsapp.webp" alt="Whatsapp logo" />
						</a>
						<a href={`mailto:${siteQuickInfo.email}`}>
							<img src="/assets/images/email.webp" alt="Email logo" />
						</a>
					</div>

					<span>&copy; Copyright 2024 - {siteQuickInfo.name}</span>
				</div>
			</footer>
		</>
	);
};

export default App;
