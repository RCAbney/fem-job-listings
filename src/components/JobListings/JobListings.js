import ListingCard from "../ListingCard/ListingCard";
import styles from "./JobListings.module.css";

const JobListings = ({ listings, handleTagClick }) => {
  return (
    <div className={styles.listingsWrap}>
      {listings &&
        listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  );
};

export default JobListings;
