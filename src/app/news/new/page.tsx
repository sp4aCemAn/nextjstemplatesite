/**
 * AUTO-GENERATED FILE. Route: /news/new
 */
import NewsArticlePage1 from "@/components/pageType/NewsArticlePage1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "new",
};

export default function GenPage() {
  const props = {
  "articleTitle": "new",
  "publishDate": "01/26/26",
  "articleSummary": "what new?",
  "articleContent": "this is a new article",
  "backLinkText": "Back to News",
  "candidateName": "shufelt",
  "campaignName": "",
  "donationUrl": "",
  "facebookUrl": "",
  "instagramUrl": "",
  "tiktokUrl": "",
  "email": "jamesshufeltiii@gmail.com",
  "volunteerUrl": "",
  "twitterUrl": "",
  "phone": "479-553-9008",
  "address": "1102 S. Thompson St Springdale, AR, USA",
  "twitter": "",
  "facebook": "https://www.facebook.com/shufelt.for.justice.of.the.peace/",
  "instagram": "",
  "tiktok": "",
  "volunteer": "",
  "candidate_name": "Meleah",
  "campaign_name": "Meleah for council"
};
  return <NewsArticlePage1 {...props} />;
}
