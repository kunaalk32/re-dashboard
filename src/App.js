import FRED from "./components/FRED";
import TableauEmbed from "./components/Tableau";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Real Estate Metrics Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Housing Market Data</h2>
      <div className="grid grid-cols-1 gap-6">
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

      <h2 className="text-2xl font-semibold mb-4 mt-6">Economic Data</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <iframe
            src="http://mndne.ws/4GT5MZ"
            scrolling="no"
            frameborder="0"
            className="overflow-hidden w-full"
            style={{ height: "850px" }}
            allowTransparency="true"
            loading="lazy"
            title="10 year"
          ></iframe>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md overflow-auto">
          <FRED
            src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1sUkR&width=100%&height=475"
            title="spread"
            height="525px"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FRED
            src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1t7lm&width=100%&height=475"
            title="spread"
            height="525px"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
