import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Work() {
  return (
    <div className="w-full max-w-full">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="md:w-1/3 m-3 md:self-center">
          <Card className="w-full">
            <CardHeader color="blue" className="relative h-56 md:m-4">
              <a href="https://clevehardcastle.github.io/Recipe_Project/">
                <img
                  src={process.env.PUBLIC_URL + "/images/savvory.jpg"}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 text-white">
                Savvory
              </Typography>
              <Typography className="text-white">
                A restful api project that generates recipe text/video walk
                through for recipes.
              </Typography>
              <Typography className="text-blue-200">
                <a href="https://github.com/CleveHardcastle/Recipe_Project">
                  GitHub Repo
                </a>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            ></CardFooter>
          </Card>
        </div>
        <div className="md:w-1/3 m-3 md:self-center">
          <Card className="w-full">
            <CardHeader color="blue" className="relative h-56 md:m-4">
              <a href="https://calm-savannah-54938.herokuapp.com/">
                <img
                  src={process.env.PUBLIC_URL + "/images/friend.png"}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 text-white">
                Friend Finder
              </Typography>
              <Typography className="text-white">
                A Handlebars application that allows users to share interests
                and chat about those interests.
              </Typography>
              <Typography className="text-blue-200">
                <a href="https://github.com/CleveHardcastle/friend_finder">
                  GitHub Repo
                </a>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            ></CardFooter>
          </Card>
        </div>
        <div className="md:w-1/3 m-3 md:self-center">
          <Card className="w-full">
            <CardHeader color="blue" className="relative h-56 md:m-4">
              <a href="https://portfolio-1ua9.vercel.app/">
                <img
                  src={process.env.PUBLIC_URL + "/images/portfolio.png"}
                  alt="img-blur-shadow"
                  className="h-full w-full border"
                />
              </a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 text-white">
                Portfolio
              </Typography>
              <Typography className="text-white">
                A React application that showcases all the work I've done.
              </Typography>
              <Typography className="text-blue-200">
                <a href="https://github.com/CleveHardcastle/portfolio">
                  GitHub Repo
                </a>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            ></CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="md:w-1/3 m-3 md:self-center">
          <Card className="w-full">
            <CardHeader color="blue" className="relative h-56 md:m-4">
              <a href="https://cryptic-retreat-89387.herokuapp.com/">
                <img
                  src={process.env.PUBLIC_URL + "/images/purrfect.png"}
                  alt="img-blur-shadow"
                  className="h-full w-full border"
                />
              </a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 text-white">
                Purrfect Pals
              </Typography>
              <Typography className="text-white">
                A React application that allows people to find shelters near
                them and discuss cat breeds.
              </Typography>
              <Typography className="text-blue-200">
                <a href="https://github.com/talexander91/Purrfect_Pals">
                  GitHub Repo
                </a>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            ></CardFooter>
          </Card>
        </div>
        <div className="md:w-1/3 m-3 md:self-center">
          <Card className="w-full">
            <CardHeader color="blue" className="relative h-56 md:m-4">
              <a href="https://coalition-skill-test.vercel.app/">
                <img
                  src={process.env.PUBLIC_URL + "/images/skilltest.jpg"}
                  alt="img-blur-shadow"
                  className="h-full w-full border"
                />
              </a>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2 text-white">
                Coalition Skill Test
              </Typography>
              <Typography className="text-white">
                A React application to showcase my ability to make designs based
                off documentation.
              </Typography>
              <Typography className="text-blue-200">
                <a href="https://github.com/CleveHardcastle/CoalitionSkillTest">
                  GitHub Repo
                </a>
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            ></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Work;
