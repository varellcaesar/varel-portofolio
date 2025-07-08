"use client";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-4 py-22 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-22">
          About this site
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          {
            "Tokyo is an independent publication launched in July 2024 by Jamie Larson. If you subscribe today, you'll get full access to the website as well as email newsletters about new content when it's available. Your subscription makes this site possible, and allows Tokyo to continue to exist. Thank you!"
          }
        </p>

        {/* Sections */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-semibold mb-2">Access all areas</h2>
            <p className="text-gray-700">
              {
                "By signing up, you'll get access to the full archive of everything that's been published before and everything that's still to come. Your very own private library."
              }
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Fresh content, delivered
            </h2>
            <p className="text-gray-700">
              Stay up to date with new content sent straight to your inbox! No
              more worrying about whether you missed something because of a
              pesky algorithm or news feed.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Meet people like you</h2>
            <p className="text-gray-700">
              Join a community of other subscribers who share the same
              interests.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Footer */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Start your own thing</h2>
          <p className="text-gray-700">
            Enjoying the experience? Get started for free and set up your very
            own subscription business using{" "}
            <a
              href="https://ghost.org"
              className="underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghost
            </a>
            , the same platform that powers this website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
