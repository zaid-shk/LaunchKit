#!/usr/bin/env node

import { intro, outro } from "@clack/prompts";
import { createProject } from "../core/createProject.js";


intro("Welcome to LaunchKit");

await createProject();

