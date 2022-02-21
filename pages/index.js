import Head from 'next/head';
import {useRouter} from 'next/router';
import {Grid, Button} from '@material-ui/core';
import BuyCard from '../components/buyCard';
import InfoCard from '../components/infoCard';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Atari decentralized  Exchange</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/token/ATARI.png" />
        
      </Head>

      <div className = "diceGrid1">
        <Grid container>
          <Grid item xs={12} sm = {1} md = {1} lg={2}></Grid>
          <Grid item xs = {12} sm = {10} md = {10} lg={8}>
            <BuyCard />
          </Grid>
          <Grid item xs={12} sm = {1} md = {1} lg={2}></Grid>
        </Grid>
      </div>
    </div>
  )
}
