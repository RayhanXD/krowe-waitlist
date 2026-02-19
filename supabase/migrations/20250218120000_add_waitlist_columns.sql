/*
  # Add waitlist form columns

  Adds columns to store:
  - has_idea: Yes, No, Just an idea
  - heard_from: TikTok, Instagram, LinkedIn, Word of mouth, Other
  - heard_from_other: custom text when heard_from is Other
*/

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS has_idea text,
  ADD COLUMN IF NOT EXISTS heard_from text,
  ADD COLUMN IF NOT EXISTS heard_from_other text;
