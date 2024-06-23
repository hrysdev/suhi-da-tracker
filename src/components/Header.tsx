import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// TODO: ボタンではなく、タブにする
// 参考URL: https://mui.com/material-ui/react-tabs/
export default function Header() {
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h2">寿司打トラッカー</Typography>
      <ButtonGroup variant="text" aria-label="Basic button group">
        {[
          "お手軽3,000円コース",
          "お勧め5,000円コース",
          "高級10,000円コース",
        ].map((item) => {
          return <Button>{item}</Button>;
        })}
      </ButtonGroup>
    </Stack>
  );
}
