import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1} style={{ fontSize: "50px", color: "white" }}>
        LIQUOR TOKEN CRONOS - Hidden Brewery
      </h1>
      <div className={styles.nftBoxGrid}>
        {/* Mint Container with External Link */}
        <a
          href="https://brewery.liquor-token-cronos.com/"  // Replace with your external URL
          className={styles.optionSelectBox}
          style={{
            backgroundImage:
              'url("https://thumbs.dreamstime.com/b/moonshine-cobber-still-distillery-equipment-scaleable-vector-illustration-197287991.jpg")',
          }}
        >
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2
            className={styles.selectBoxTitle}
            style={{ fontSize: "50px", color: "yellow" }}
          >
            $LIQUOR
          </h2>
          <p className={styles.selectBoxDescription}>
            Stake $LIQUOR for $MoonShine
          </p>
        </a>

        {/* Staking Container with Internal Link */}
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
          style={{
            backgroundImage:
              'url("https://gifgalaxy.com/storage/uploads/gifs/pijanimajmun.gif")',
          }}
        >
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2
            className={styles.selectBoxTitle}
            style={{ fontSize: "50px", color: "yellow" }}
          >
            Kingdom Apes
          </h2>
          <p className={styles.selectBoxDescription}>
            Stake your <b>Kingdome Apes NFTs</b>{" "}
            receive 0,1 <b>$MoonShine</b> per day per staked NFT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
