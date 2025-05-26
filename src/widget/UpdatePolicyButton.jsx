export default function UpdatePolicyButton({
  status,
  isEditable,
  handleStatusChange,
}) {
  //   <Button disabled={isEditable} onClick={() => handleStatusChange("Bind")}>
  //     <CheckCircle className="mr-2 h-4 w-4" />
  //     Bind Policy
  //   </Button>;

  // gets the correct button for the status
  const getPolicyButton = (status) => {
    switch (status) {
      case "Bind":
        return (
          <Button
            disabled={isEditable}
            onClick={() => handleStatusChange("Bind")}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Bind Policy
          </Button>
        );
    }
  };

  return getPolicyButton(status);
}
