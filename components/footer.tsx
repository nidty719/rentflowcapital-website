import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export function Footer(props: {
  className?: string;
  builtBy: string;
  builtByLink: string;
  githubLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
}) {
  return (
    <footer className={cn("py-6 md:px-8 md:py-0", props.className)}>
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={props.builtByLink}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {props.builtBy}
          </a>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
          )}
          {props.twitterLink && (
            <a
              href={props.twitterLink}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <TwitterLogoIcon className="h-5 w-5" />
            </a>
          )}
          {props.linkedinLink && (
            <a
              href={props.linkedinLink}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
