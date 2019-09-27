import { danger, warn, message } from "danger";

const wrikeLink = (wrikeId) => `<a href="https://www.wrike.com/open.htm?id=${wrikeId}" target="_blank">#${wrikeId}</a>`;

message("Look ma, I can post!");

if (danger.github.pr.additions + danger.github.pr.deletions > 500) {
  warn("Your PR has over 500 lines of code! 😱\nPlease try to break it up into separate PRs if possible.");
}
