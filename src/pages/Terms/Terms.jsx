import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Heading from "../../components/Headings/Heading";
import Terms1 from "../../Assets/tersm1.svg";
import Terms2 from "../../Assets/tersm2.svg";
import Terms3 from "../../Assets/terms3.svg";

const Terms = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginY: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            "@media(max-width : 770px)": {
              flexDirection: "column-reverse",
            },
          }}
        >
          <img src={Terms1} alt="@BHaratTech" style={{ width: "30vw", marginBottom:"28px" }} />
          <Box>
            <Heading heading="Usage Guidelines for Websites" />
            <Typography
            variant="h1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "500",
                marginY: "1rem",
              }}
            >
              Before utilising the portal, please read this carefully.
            </Typography>
            <Typography paragraph sx={{ textAlign: "justify" }}>
              Greetings from &quot;Collegecue.com,&quot; a website under the
              ownership of &quot;Bharattech Techecosystem Pvt. Ltd.&quot; These
              terms and conditions apply to all users of this website, and it is
              understood that by accessing and using Collegecue.com, you fully
              understand and agree to the &quot;Terms of Use,&quot; both in its
              whole and indefinitely. You are not permitted to use this website
              if you contradict with these terms.
            </Typography>
          </Box>
        </Box>

        <Heading heading="Website Overview" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Collegecue.com and all of its incarnations, including mobile and
          applications, are managed, moderated, and operated by &quot;Bharattech
          Techecosystem Pvt. Ltd.&quot;. In addition to serving as a gateway for
          courses and schools/institutions, Collegecue.com helps students by
          offering facts on the admissions procedures for the courses, colleges,
          and institutions that they are interested in. Collegecue informs
          students about all of their academic options and walks them through
          the application process. Regardless of whether a college or
          institution is a partner college or another listed college, Collegecue
          does not accept applications or registrations on their behalf. The
          student is considered to have applied for the support of the
          Collegecue team by applying to any course, college, or institution on
          the website. Not only does it serve as a gateway for courses and
          schools/institutions, but it also offers valuable information on
          admissions, job opportunities, internships, and freelancing. It
          recognizes the importance of preparing students for their future
          careers. Through its AI-powered system, it provides guidance on
          finding job opportunities that align with a student&apos;s interests
          and skills. For those interested in freelancing opportunities,
          Collegecue.com offers valuable resources and information. It provides
          insights into various freelance platforms and industries where
          students can showcase their talents and earn income while studying or
          after graduation.
        </Typography>

        <Heading heading="Using AI in Collegecue" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          By leveraging AI, Collegecue.com is able to offer accurate and
          up-to-date facts on various aspects of the admissions process. This
          includes details about application requirements, deadlines, entrance
          exams, scholarships, and more. Students can rely on this platform to
          access comprehensive information that can help them make informed
          decisions about their college choices. The integration of AI
          technology allows Collegecue.com to analyze vast amounts of data from
          multiple sources. This enables the platform to provide personalized
          recommendations based on a student&apos;s preferences and academic
          profile.
        </Typography>

        <Heading heading="Aptness for using website" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          The website is not intended for users under the age of 13, and as a
          result, the company does not plan to retain user data from users under
          that age. By completing the assessment or utilising the portal, the
          user is considered to have guaranteed and represented that they meet
          the basic requirements mentioned above. The user and any associated
          data will be removed upon receipt of any information that contradicts
          the aforementioned.
        </Typography>

        <Heading heading="Creating a Collegecue.com user account" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          According to the terms and conditions outlined below, the website aims
          to secure personal information users enter while creating an account.
          By making an account, the user accepts the terms necessary to keep the
          username and password for the account private. The user is also solely
          responsible for any action carried out using the user account.
          Additionally, the user consents to take full responsibility and
          liability for any actions taken under the username. Along with
          consenting to receive information about the college and course they
          are applying to, the user also agrees to receive information about
          comparable colleges and courses via SMS and email.
        </Typography>

        <Heading heading="Details Gathered by the Website" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          The two methods used by Collegecue to collect data are: Contact Forms
          (which gather information about user interests, age, and educational
          background to streamline the data presentation process) and
          Login/Signup (which requires visitors to agree to the website&apos;s
          terms of conditions in order to create a user account). Both
          non-personal and personal information may be included in the data
          collection. If required by applicable law, we may keep, gather,
          utilise, and process your information in India. The website gathers
          user data so that it can offer recommendations based on the
          students&apos; profiles and notify them of the application procedures
          that are still in progress.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            "@media(max-width : 770px)": {
              flexDirection: "column",
            },
          }}
        >
          <img src={Terms2} alt="@BHaratTech" style={{ width: "30vw" }} />

          <Box>
            <Heading heading="Opt-in Mails and Additional Data Usage by the Company" />
            <Typography component="div">
              <ul>
                <li>
                  Opt-in Mails: Users who choose to receive newsletters or
                  notifications on admissions processes and entrance exams will
                  receive personalized emails. Users can opt out of this service
                  at any time.
                </li>
                <li>
                  User or Visitor Feedback: The company may reach out to gather
                  opinions on new features or offerings. Users can contact
                  privacy@collegeCue.com if they prefer not to participate.
                </li>
                <li>
                  Geographical Data: Demographic or geographical data is used to
                  deliver location-specific customized data.
                </li>
                <li>
                  Cookies and IP Information: Used to deliver relevant search
                  results and retain non-personally identifiable data, such as
                  search history, questions asked, interests in education, time
                  and date, domain, and advertisement response.
                </li>
                <li>
                  Conversion Pixel: Utilized to track user behavior on leads
                  collection forms for trend analysis and data transfer to
                  educational service providers.
                </li>
              </ul>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  marginY: "1rem",
                }}
              >
                The gathered information may be used for the following purposes:
              </Typography>
              <ul>
                <li>
                  Email Distribution, SMS, or Phone: For administrative purposes
                  such as notifying users of updates or changes related to
                  colleges or courses they are interested in. Users can opt out
                  of receiving these communications.
                </li>
                <li>
                  Banner Ads and Targeting: Show personalized banner ads and
                  content related to the website&apos;s offerings.
                </li>
                <li>
                  Contact Permissions: By using the website, users grant
                  permission to be contacted via phone, email, or SMS to offer
                  services, share product information, and send promotional
                  offers.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>

        <Heading heading="Third-party content " />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Users who submit &quot;testimonials&quot; have the right to have their
          work displayed publicly and shared with our partner institutions. The
          user acknowledges that by using this website, they will refrain from
          using any derogatory or vulgar language in any forum or publicly
          accessible comment area. Users acknowledge and accept that, as we have
          no control over third-party content, we are not liable for and do not
          support any such content, including reviews and information that other
          users may submit about colleges and other institutions. The
          information contained in such content is not guaranteed to be
          accurate, current, suitable, reliable, or of high quality.
          Additionally, we disclaim all duty for any unintentional,
          objectionable, incorrect, misleading, or illegal content that is made
          available by users, advertisers, or other third parties. We don&apos;t
          claim ownership of any content that users submit or grant us
          permission to use; however, users also agree that such content belongs
          exclusively to us and that neither the user nor any other website
          visitor may publish, copy, or reproduce any such content on any other
          online portal without first receiving written permission from
          Collegecue. If a user uploads anything on the website, whether
          knowingly or inadvertently, they are free to take down or have their
          own content removed.
        </Typography>

        <Heading heading="Intellectual Property Rights" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Unless otherwise indicated, Bharattech Techecosystem Pvt. Ltd. is the
          only owner of all digital content made accessible on the website,
          including software, photos, text, photographs, services, and other
          items of a similar nature. Without the company&apos;s previous
          consent, Collegecue.com&apos;s trademarks, logos, and service marks
          may not be utilised for any commercial or non-commercial purpose. The
          information, text, graphics, images, audio and video clips, logos,
          icons, and links that are used on this website by institutions and/or
          third parties and that are gathered from the public domain and made
          available under the fair usage policy are provided only for
          identification and/or informational purposes; they are not the
          intellectual property of the company. All forms of data mining, such
          as scraping, crawling, and republishing, are prohibited unless the
          company grants express consent. The rights or title to utilise any
          content that is downloaded from the website for commercial purposes
          are not transferred.
        </Typography>

        <Heading heading="Refund and Cancellation Policy " />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Collegecue.com&apos;s payment gateway partner handles all financial
          transactions made by users on the site; we are not liable for any
          inconsistencies in payments. Additionally, in the event that the
          user&apos;s payment exceeds the total number of applications he has
          submitted, we reserve the right to examine and evaluate the refund
          case. If there is a payment shortage or excess, we have full authority
          to assess the user&apos;s college selections. In order to submit any
          information or follow the progress of your application form&apos;s
          payment, you must also take note of your Transaction ID and receipt
          number, which were produced by the payment gateway. Any outstanding
          balance that the user is required to pay must be settled prior to the
          college application deadline. The college might not recognise the
          application as a legitimate entrance if payment is received after
          that. For this, Collegecue disclaims all liability, and refund
          requests will not be fulfilled.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            "@media(max-width : 770px)": {
              flexDirection: "column",
            },
          }}
        >
          <img src={Terms3} alt="@BHaratTech" style={{ width: "30vw" }} />

          <Box>
            <Heading heading="Governing Law" />
            <Typography paragraph sx={{ textAlign: "justify" }}>
              The laws of India shall apply to all legal processes, and in the
              event of a dispute, the courts of Gurugram shall have exclusive
              jurisdiction.
            </Typography>

            <Heading heading="Limitation of Liability" />
            <Typography paragraph sx={{ textAlign: "justify" }}>
              By accessing the website, you acknowledge and accept that
              Collegecue is not responsible for any legal theory or contracts
              resulting from problems of any sort that third parties may cause.
              Additionally, the website disclaims any responsibility for the
              accuracy or legitimacy of any information submitted by users,
              including coaches, educational institutions, and private users. It
              is strongly advised that any information found on the website be
              validated before being taken into consideration in order to avoid
              losing out on visitors. Collegecue disclaims all liability for any
              errors or incomplete information, data theft, loss, or damage to
              the system resulting from using these external links.
              Collegecue.com states that it will not be used to spread any
              hazardous or malicious software, hence it disclaims all liability
              for any programme loss or system damage. The use of websites
              operated by third parties is not subject to Collegecue&apos;s
              terms and conditions.
            </Typography>
          </Box>
        </Box>

        <Heading heading="External Links" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Collegecue.com disclaims all liability for any damages resulting from
          using any of the website&apos;s external links. It is also advised
          that the user confirms this information with additional sources before
          to making any decisions based on content or adverts seen on the
          websites that are linked. The website offers external and referral
          connections to all colleges and institutions, as appropriate, for the
          convenience of its users. The external links that other users have
          uploaded or that we have included as a service to individuals who may
          be interested in this information. All such links to other websites
          are provided to you at your own risk. We neither manage nor monitor
          third-party websites, and we make no representations or claims about
          them. If such links are offered by us, we do it purely for your
          convenience. Links to websites operated by third parties do not
          indicate that we support, adopt, endorse, or are associated with any
          of these websites.
        </Typography>

        <Heading heading="Modifications to the Privacy Policy:" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Collegecue retains the right, at any time and whenever necessary, to
          change or modify these terms of use and the Privacy Policy. In order
          to keep you informed of any changes, we ask that you periodically
          visit this page. You unconditionally accept this change by using the
          Platform going forward.
        </Typography>

        <Heading heading="Contact" />
        <Typography paragraph sx={{ textAlign: "justify" }}>
          Please contact with Bharattech Techecosystem Private Limited if you
          need any clarification. phone number: +915124050467
        </Typography>
      </Container>
    </>
  );
};

export default Terms;
