import TableauEmbed from "./components/Tableau";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Real Estate Metrics Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Housing Market Data</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TableauEmbed
            src="https://public.tableau.com/shared/DK9QW5P7Z?:display_count=n&:origin=viz_share_link&:embed=y"
            title="Median Sale Price"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TableauEmbed
            src="https://public.tableau.com/shared/H6Q2GBQ3H?:display_count=n&:origin=viz_share_link&:embed=y"
            title="Inventory"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TableauEmbed
            src="https://public.tableau.com/shared/46QGNP5NN?:display_count=n&:origin=viz_share_link&:embed=y"
            title="New Listings"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TableauEmbed
            src="https://public.tableau.com/shared/KC9SSBH67?:display_count=n&:origin=viz_share_link&:embed=y"
            title="Months of Supply"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">DOM</h2>
          <TableauEmbed
            src="https://public.tableau.com/shared/4ZZG4PFCY?:display_count=n&:origin=viz_share_link&:embed=y"
            title="Days on Market"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Economic Data</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md overflow-auto">
          <iframe
            src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1sUkR&width=670&height=475"
            scrolling="no"
            frameborder="0"
            style={{ overflow: "hidden", width: "670px", height: "525px" }}
            allowTransparency="true"
            loading="lazy"
            title="10 year"
          ></iframe>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Mortgage Rates</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">10-Year Yield</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">GDP Growth</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
