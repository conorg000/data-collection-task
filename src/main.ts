import { writeFileSync } from "fs";
import { scholarshipScraper } from "./scholarshipScraper";
import { ScholarshipConfig } from "./types";

const scholarshipConfig: ScholarshipConfig = {
    university: "AVU",
    urls: [
        `https://www.avondale.edu.au/scholarships/`
    ]
}

const scholarships = scholarshipScraper(scholarshipConfig);

const output = JSON.stringify(scholarships, null, 2);

writeFileSync('src/scholarships.json', output);