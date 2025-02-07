<script>
  import { Player, Tournament } from "./lib/classes/classes";
  import { swissPairing } from "./lib/swissPairing";
  const tournament = new Tournament(
    [
      new Player("Iñigo", 1000),
      new Player("Marcos", 1500),
      new Player("Manuel", 1700),
    ],
    3
  );
  let response = swissPairing(tournament);
  console.log(response);
</script>
