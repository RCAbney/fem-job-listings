import React from "react";
import JobAvatar from "../JobAvatar/JobAvatar";
import styles from "./ListingCard.module.css";
import Tag from "../Tag/Tag";
import Pill from "../Pill/Pill";

const ListingCard = (props) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    new: newPosition,
  } = props.listing;

  const handleTagClick = props.handleTagClick;

  return (
    <article className={`${styles.listingCard} ${featured && styles.featured}`}>
      <JobAvatar imgSrc={logo} altText={company} mobile />
      <div className={styles.listingDetails}>
        <JobAvatar imgSrc={logo} altText={company} />
        <div className={styles.jobPostingText}>
          <p className={styles.jobListing}>
            <span>{company}</span> {newPosition && <Pill title={"New!"} />}{" "}
            {featured && <Pill title="Featured" featured />}
          </p>
          <h2 className={styles.jobPosition}>{position}</h2>
          <p className={styles.jobDetails}>
            {postedAt} &#8226; {contract} &#8226; {location}
          </p>
        </div>
      </div>
      <div className={styles.listingTags}>
        {role && <Tag tagTitle={role} handleTagClick={handleTagClick} />}
        {level && <Tag tagTitle={level} handleTagClick={handleTagClick} />}
        {languages &&
          languages.map((language, i) => {
            return (
              <Tag
                key={i}
                tagTitle={language}
                handleTagClick={handleTagClick}
              />
            );
          })}
        {tools &&
          tools.map((tool, i) => {
            return (
              <Tag key={i} tagTitle={tool} handleTagClick={handleTagClick} />
            );
          })}
      </div>
    </article>
  );
};

export default ListingCard;
